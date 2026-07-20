function DashboardPage() {
  return (
    <main style={{ padding: "32px", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1>Job Application Tracker</h1>
          <p>Manage your job applications in one place.</p>
        </div>

        <button
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          + Add application
        </button>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <DashboardCard title="Total applications" value="0" />
        <DashboardCard title="Interviews" value="0" />
        <DashboardCard title="Offers" value="0" />
        <DashboardCard title="Follow-ups due" value="0" />
      </section>

      <section>
        <h2>Recent applications</h2>

        <div
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <p>You have not added any applications yet.</p>

          <button
            style={{
              backgroundColor: "#111827",
              color: "white",
              border: "none",
              padding: "12px 16px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Add your first application
          </button>
        </div>
      </section>
    </main>
  );
}

function DashboardCard({ title, value }) {
  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <p style={{ color: "#6b7280", margin: 0 }}>{title}</p>
      <strong style={{ fontSize: "32px" }}>{value}</strong>
    </article>
  );
}

export default DashboardPage;