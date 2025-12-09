import Foundation

// MARK: - Models

struct Experience: Identifiable {
    let id = UUID()
    let role: String
    let company: String
    let period: String
    let badge: String
    let bullets: [String]
}

struct Project: Identifiable {
    let id = UUID()
    let title: String
    let stack: String
    let badge: String
    let description: String
    let link: String?
}

struct Education: Identifiable {
    let id = UUID()
    let degree: String
    let institution: String
    let period: String
    let badge: String
    let details: String
}

struct SkillCategory: Identifiable {
    let id = UUID()
    let name: String
    let skills: [String]
}

struct Publication: Identifiable {
    let id = UUID()
    let title: String
    let venue: String
    let year: String
    let description: String
}

// MARK: - Data Store

struct PortfolioData {
    static let bio = "ML engineer focused on clinically grounded computer vision and evaluation pipelines. Ships production-grade models for healthcare and reliability-focused products."
    
    static let experience = [
        Experience(
            role: "Graduate ML Research Engineer",
            company: "Monash University",
            period: "2025-2026",
            badge: "MedTech CV",
            bullets: [
                "Built smartphone-based vital sign pipeline (PPG → vPPG/aPPG) with ResNet-50 + multi-head attention; hit 95%+ HR accuracy.",
                "Owned PyTorch training/eval on A40 GPUs, designing augmentations for motion/illumination noise.",
                "Translated findings for clinicians and industry partners; produced reproducible evaluation scripts."
            ]
        ),
        Experience(
            role: "Information Technology Officer",
            company: "Aglow Engineers",
            period: "Jun 2022-Feb 2023",
            badge: "Predictive Maintenance",
            bullets: [
                "Migrated manual Excel logs to automated SQL reporting for 50+ stakeholders.",
                "Shipped predictive maintenance models that reduced equipment downtime 22%.",
                "Partnered with ops/management to prioritize failure modes and ship retraining cadence."
            ]
        ),
        Experience(
            role: "Software Intern",
            company: "Centre for Railway Information Systems",
            period: "Feb-May 2022",
            badge: "ML Ops",
            bullets: [
                "Delivered anomaly detection for 200+ rail assets with 94% accuracy.",
                "Built the full data pipeline: feature engineering, labeling workflows, and validation.",
                "Operationalized retraining and monitoring across the existing WISE database stack."
            ]
        ),
        Experience(
            role: "Software Development Intern",
            company: "AMD (Xilinx)",
            period: "Jun-Dec 2021",
            badge: "Tooling",
            bullets: [
                "Built the Data Flow Synchronicity Checker used by 25+ verification engineers.",
                "Implemented SHA-256 integrity checks vs Artifactory/Perforce.",
                "Improved verification workflow efficiency ~30% via automated notifications."
            ]
        )
    ]
    
    static let projects = [
        Project(
            title: "Vital Sign Monitoring (Mobile)",
            stack: "Computer Vision | PyTorch | ResNet",
            badge: "MedTech",
            description: "Converted single-sensor PPG into visual representations and trained ResNet-50 with multi-head attention to estimate HR/BP on-device.",
            link: "https://link.springer.com/article/10.1007/s10916-025-02228-6"
        ),
        Project(
            title: "Predictive Maintenance for Rail",
            stack: "XGBoost | Time-series | SQL",
            badge: "Reliability",
            description: "Engineered rolling/lag features and deployed XGBoost models with drift checks; reduced unplanned downtime 18-22%.",
            link: nil
        ),
        Project(
            title: "Data Flow Synchronicity Checker",
            stack: "Python | Hashing | Automation",
            badge: "Tooling",
            description: "Automated file integrity checks across multi-repo FPGA verification flows using SHA-256 and cron-based scheduling.",
            link: nil
        )
    ]
    
    static let education = [
        Education(
            degree: "Master of Artificial Intelligence",
            institution: "Monash University",
            period: "2023-2025",
            badge: "AI",
            details: "Coursework: Deep Learning, Intelligent Image & Video Analysis, Foundations of Data Science."
        ),
        Education(
            degree: "M.Sc. Physics & B.E. Electronics",
            institution: "BITS Pilani",
            period: "2017-2022",
            badge: "Dual Degree",
            details: "Thesis: Monte Carlo simulations of phase transitions in Ising models."
        )
    ]
    
    static let skills = [
        SkillCategory(name: "ML Engineering", skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "CNNs", "Transformers", "Quantization"]),
        SkillCategory(name: "Data & MLOps", skills: ["Feature Engineering", "SQL", "ETL", "Docker", "REST (Flask)", "Monitoring"]),
        SkillCategory(name: "Tooling & Languages", skills: ["Python (expert)", "Bash", "C++", "MATLAB", "Git/Perforce", "OpenCV", "NumPy/Pandas"])
    ]
    
    static let publications = [
        Publication(
            title: "Evolving Blood Pressure Estimation: From Feature Analysis to Image-Based Deep Learning Models",
            venue: "Journal of Medical Systems",
            year: "2025",
            description: "Single-sensor PPG framework with ResNet-50 meeting AAMI/BHS standards."
        ),
        Publication(
            title: "VITAL Net: A Hybrid Framework for SpO2 and HR Estimation Using Smartphone rPPG Video",
            venue: "2026 IEEE Applied Sensing Conference",
            year: "2026",
            description: "Rahul Ranjan, Vishal Singh Roha, Mehmet Rasit Yuce"
        )
    ]
}
