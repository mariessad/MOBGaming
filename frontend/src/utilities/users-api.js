const BASE_URL = "http://localhost:3001/api/users";

export async function signUp(userData) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });

    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Invalid Sign Up");
    }
}

export async function login(userData) {
    // Use the data to make a network request
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    }).then((response) => {
        return response.json();
    });

    if (response.status === "success") {
        return response;
    } else {
        throw new Error("Invalid email or password");
    }
}