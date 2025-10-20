

export const checkValidData = (email, password) => {
    
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // give me password validation regex
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
.test(password);
    
    if(!isEmailValid) return "Email ID is not valid.";
    if(!isPasswordValid) return "Password must be at least 8 characters long and contain at least one letter and one number.";
    
    return null; // valid data
}


