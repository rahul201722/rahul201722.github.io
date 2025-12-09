import SwiftUI

// MARK: - Reusable Components

struct SectionHeader: View {
    let title: String
    let subtitle: String?
    
    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(title.uppercased())
                .font(.caption)
                .fontWeight(.bold)
                .foregroundColor(Theme.primaryDark)
                .tracking(1.0) // letter-spacing
            
            if let subtitle = subtitle {
                Text(subtitle)
                    .font(.title2)
                    .fontWeight(.bold)
                    .foregroundColor(Theme.text)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(.vertical, 8)
    }
}

struct Badge: View {
    let text: String
    
    var body: some View {
        Text(text)
            .font(.caption)
            .fontWeight(.bold)
            .foregroundColor(Theme.primaryDark)
            .padding(.horizontal, 10)
            .padding(.vertical, 6)
            .background(Color(hex: "e9f6f0"))
            .overlay(
                RoundedRectangle(cornerRadius: 12)
                    .stroke(Color(hex: "cde7da"), lineWidth: 1)
            )
            .cornerRadius(12)
    }
}

struct CardView<Content: View>: View {
    let content: Content
    
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            content
        }
        .padding(16)
        .background(Theme.cardBackground)
        .cornerRadius(16)
        .shadow(color: Color.black.opacity(0.05), radius: 10, x: 0, y: 3)
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(Theme.border, lineWidth: 1)
        )
    }
}

struct BulletList: View {
    let items: [String]
    
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            ForEach(items, id: \.self) { item in
                HStack(alignment: .top, spacing: 8) {
                    Circle()
                        .fill(Theme.muted)
                        .frame(width: 4, height: 4)
                        .padding(.top, 8)
                    
                    Text(item)
                        .font(.body)
                        .foregroundColor(Theme.muted)
                        .fixedSize(horizontal: false, vertical: true)
                }
            }
        }
    }
}

struct CollapsibleSection<Content: View>: View {
    let title: String
    let subtitle: String
    @State private var isExpanded: Bool = false
    let content: Content

    init(title: String, subtitle: String, isExpanded: Bool = false, @ViewBuilder content: () -> Content) {
        self.title = title
        self.subtitle = subtitle
        self._isExpanded = State(initialValue: isExpanded)
        self.content = content()
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            Button(action: {
                withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                    isExpanded.toggle()
                }
            }) {
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(title)
                            .font(.headline)
                            .foregroundColor(Theme.text)
                        Text(subtitle)
                            .font(.subheadline)
                            .foregroundColor(Theme.muted)
                    }
                    Spacer()
                    Image(systemName: "chevron.right")
                        .foregroundColor(Theme.primary)
                        .rotationEffect(.degrees(isExpanded ? 90 : 0))
                }
                .padding(16)
                .background(Theme.cardBackground)
            }
            .buttonStyle(PlainButtonStyle())

            if isExpanded {
                VStack(alignment: .leading, spacing: 12) {
                    Divider()
                    content
                }
                .padding(16)
                .background(Theme.cardBackground)
                .transition(.opacity.combined(with: .move(edge: .top)))
            }
        }
        .cornerRadius(16)
        .shadow(color: Color.black.opacity(0.05), radius: 10, x: 0, y: 3)
        .overlay(
            RoundedRectangle(cornerRadius: 16)
                .stroke(Theme.border, lineWidth: 1)
        )
    }
}
