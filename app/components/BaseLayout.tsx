"use client";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h1 style={styles.logo}>DevBoard</h1>

        <div style={styles.nav}>
          <div style={styles.navItem}>Dashboard</div>
          <div style={styles.navItem}>Tasks</div>
          <div style={styles.navItem}>Settings</div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1 }}>
        
        {/* HEADER */}
        <div style={styles.header}>
          <div>
            <h2 style={{ margin: 0 }}>Dashboard</h2>
            <p style={styles.subText}>
              {new Date().toDateString()}
            </p>
          </div>

          <div>Ganesh 👋</div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    background: "#020617",
    color: "#fff",
    padding: "20px",
    borderRight: "1px solid #1e293b",
  },
  logo: {
    marginBottom: "30px",
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  navItem: {
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 30px",
    borderBottom: "1px solid #1e293b",
    background: "#0f172a",
    color: "#fff",
  },
  subText: {
    fontSize: "12px",
    color: "#94a3b8",
  },
  content: {
    padding: "30px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "#fff",
  },
};