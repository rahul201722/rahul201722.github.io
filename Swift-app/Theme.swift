import SwiftUI

// Design System matched to styles.css
struct Theme {
    static let primary = Color(hex: "54b689")
    static let primaryDark = Color(hex: "3d9870")
    static let background = Color(hex: "f6f8f7")
    static let cardBackground = Color(hex: "ffffff")
    static let text = Color(hex: "0f1b16")
    static let muted = Color(hex: "4a534e")
    static let border = Color(hex: "e1e7e3")
    static let secondaryBackground = Color(hex: "e1e9e5") // section.alt
}

// Hex Color Extension
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3: // RGB (12-bit)
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6: // RGB (24-bit)
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8: // ARGB (32-bit)
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (1, 1, 1, 0)
        }

        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
