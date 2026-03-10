import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  type LoginStatus = "" | "success" | "invalid";

  const [loginStatus, setLogisStatus] = useState<LoginStatus>("");

  const show_message = {
    success: "Welcome, user!",
    invalid: "Invalid username or password",
  };

  const inputs = [
    { label: "Username", type: "text", id: "username", name: "username" },
    { label: "Password", type: "password", id: "password", name: "password" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidData =
    formData.username === "username" && formData.password === "password";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidData) {
      setLogisStatus("success");
    } else {
      setLogisStatus("invalid");
    }
  };

  return (
    <div className="form_section">
      <div className="form">
        <h1 className="heading">Login Page</h1>
        <div>{loginStatus && <p>{show_message[loginStatus]}</p>}</div>

        {loginStatus !== "success" && (
          <form onSubmit={handleSubmit} method="post">
            {inputs.map((input) => (
              <div className="input_div" key={input.id}>
                <label htmlFor={input.id}>{input.label}:</label>

                <input
                  onChange={handleChange}
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  required
                />
              </div>
            ))}
            <div className="submit_btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
