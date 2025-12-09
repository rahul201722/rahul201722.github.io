import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 24) {
                    
                    // MARK: - Hero Section
                    VStack(spacing: 16) {
                        Image("profile")
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width: 120, height: 120) // Slightly smaller
                            .clipShape(Circle())
                            .overlay(Circle().stroke(Color.white, lineWidth: 4))
                            .shadow(radius: 8)
                        
                        VStack(spacing: 4) {
                            Text("Rahul Ranjan")
                                .font(.title)
                                .fontWeight(.bold)
                                .foregroundColor(Theme.text)
                            
                            Text("ML Engineer & Researcher")
                                .font(.subheadline)
                                .fontWeight(.medium)
                                .foregroundColor(Theme.primaryDark)
                        }
                        
                        HStack(spacing: 16) {
                            SocialIcon(icon: "envelope.fill", url: "mailto:rahulrkm0038@gmail.com")
                            SocialIcon(icon: "link", url: "https://linkedin.com/in/rahul-ranjan-b595891b1")
                            SocialIcon(icon: "chevron.left.forwardslash.chevron.right", url: "https://github.com/rahul201722")
                        }
                        .padding(.top, 4)
                    }
                    .padding(.top, 20)
                    
                    // MARK: - Publications
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(title: "Publications", subtitle: nil)
                        
                        ForEach(PortfolioData.publications) { pub in
                            CollapsibleSection(title: pub.title, subtitle: pub.year) {
                                VStack(alignment: .leading, spacing: 8) {
                                    Text(pub.venue)
                                        .font(.caption)
                                        .fontWeight(.bold)
                                        .foregroundColor(Theme.primary)
                                    Text(pub.description)
                                        .font(.body)
                                        .foregroundColor(Theme.muted)
                                }
                            }
                        }
                    }
                    .padding(.horizontal)
                    
                    // MARK: - Experience
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(title: "Experience", subtitle: nil)
                        
                        ForEach(PortfolioData.experience) { job in
                            CollapsibleSection(title: job.role, subtitle: job.company) {
                                VStack(alignment: .leading, spacing: 12) {
                                    HStack {
                                        Text(job.period)
                                            .font(.caption)
                                            .foregroundColor(Theme.muted)
                                        Spacer()
                                        Badge(text: job.badge)
                                    }
                                    BulletList(items: job.bullets)
                                }
                            }
                        }
                    }
                    .padding(.horizontal)
                    
                    // MARK: - Projects
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(title: "Projects", subtitle: nil)
                        
                        ForEach(PortfolioData.projects) { project in
                            CollapsibleSection(title: project.title, subtitle: project.stack) {
                                VStack(alignment: .leading, spacing: 12) {
                                    HStack {
                                        Spacer()
                                        Badge(text: project.badge)
                                    }
                                    
                                    Text(project.description)
                                        .font(.body)
                                        .foregroundColor(Theme.muted)
                                    
                                    if let link = project.link, let url = URL(string: link) {
                                        Link("View Project", destination: url)
                                            .font(.subheadline)
                                            .fontWeight(.bold)
                                            .foregroundColor(Theme.primary)
                                    }
                                }
                            }
                        }
                    }
                    .padding(.horizontal)

                    // MARK: - Skills
                    VStack(alignment: .leading, spacing: 12) {
                        SectionHeader(title: "Skills", subtitle: nil)
                        
                        ForEach(PortfolioData.skills) { category in
                            CollapsibleSection(title: category.name, subtitle: "\(category.skills.count) skills") {
                                FlowLayout(spacing: 8) {
                                    ForEach(category.skills, id: \.self) { skill in
                                        Text(skill)
                                            .font(.caption)
                                            .foregroundColor(Theme.text)
                                            .padding(.horizontal, 12)
                                            .padding(.vertical, 6)
                                            .background(Theme.background) // Slightly distinct bg
                                            .cornerRadius(8)
                                    }
                                }
                            }
                        }
                    }
                    .padding(.horizontal)
                    
                    Text("© 2025 Rahul Ranjan")
                        .font(.caption)
                        .foregroundColor(Theme.muted)
                        .padding(.vertical, 20)
                }
            }
            .background(Theme.background)
        }
    }
}

// Minimal Social Icon
struct SocialIcon: View {
    let icon: String
    let url: String
    
    var body: some View {
        if let linkURL = URL(string: url) {
            Link(destination: linkURL) {
                Image(systemName: icon)
                    .font(.system(size: 20))
                    .foregroundColor(Theme.text)
                    .padding(10)
                    .background(Theme.cardBackground)
                    .clipShape(Circle())
                    .shadow(color: Color.black.opacity(0.05), radius: 4, x: 0, y: 2)
            }
        }
    }
}

// Modern iOS 16+ Layout Protocol Implementation
struct FlowLayout: Layout {
    var spacing: CGFloat = 8

    func sizeThatFits(proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) -> CGSize {
        let rows = arrangeSubviews(proposal: proposal, subviews: subviews)
        
        guard let lastRow = rows.last else {
            return .zero
        }
        
        // Use the maxY of the last row as the total height
        let totalHeight = lastRow.y + lastRow.height
        
        return CGSize(width: proposal.width ?? 0, height: totalHeight)
    }

    func placeSubviews(in bounds: CGRect, proposal: ProposedViewSize, subviews: Subviews, cache: inout ()) {
        let rows = arrangeSubviews(proposal: proposal, subviews: subviews)
        for row in rows {
            for element in row.elements {
                element.subview.place(at: CGPoint(x: bounds.minX + element.x, y: bounds.minY + row.y), proposal: .unspecified)
            }
        }
    }

    private struct Row {
        var elements: [Element] = []
        var y: CGFloat = 0
        var height: CGFloat = 0
        
        var maxY: CGFloat { y + height }
    }
    
    private struct Element {
        var subview: LayoutSubview
        var x: CGFloat
    }

    private func arrangeSubviews(proposal: ProposedViewSize, subviews: Subviews) -> [Row] {
        let containerWidth = proposal.width ?? .infinity
        var rows: [Row] = []
        var currentRow = Row()
        var currentX: CGFloat = 0
        
        for subview in subviews {
            let size = subview.sizeThatFits(.unspecified)
            
            if currentX + size.width > containerWidth && !currentRow.elements.isEmpty {
                // Next row
                currentRow.y = (rows.last?.maxY ?? 0) + spacing
                rows.append(currentRow)
                currentRow = Row()
                currentRow.y = (rows.last?.maxY ?? 0) + spacing // Update Y for new row
                currentX = 0
            }
            
            currentRow.elements.append(Element(subview: subview, x: currentX))
            currentRow.height = max(currentRow.height, size.height)
            currentX += size.width + spacing
        }
        
        if !currentRow.elements.isEmpty {
            currentRow.y = (rows.last?.maxY ?? 0) + spacing
            rows.append(currentRow)
        }
        
        return rows
    }
}