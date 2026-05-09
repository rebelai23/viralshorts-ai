function App() {
  return (
    <div style={{
      background: "#0f0f0f",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "48px", color: "#a855f7"}}>
        ViralShorts AI
      </h1>

      <p style={{fontSize: "20px", marginTop: "10px"}}>
        Turn Videos Into Viral Shorts With AI
      </p>

      <button style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#a855f7",
        border: "none",
        borderRadius: "10px",
        color: "white",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Start Free
      </button>
    </div>
  )
}

export default App
