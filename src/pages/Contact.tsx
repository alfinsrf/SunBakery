import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "" || !/^\d+$/.test(formData.phone),
      email:
        formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setOpenSnackbar(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <BackgroundContainer>
      <BlurOverlay />
      {/* Header */}
      <Box
        sx={{ textAlign: "center", position: "relative", zIndex: 10, mb: 4 }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="rgb(245, 142, 15)"
          sx={{ fontFamily: "Poppins, sans-serif" }}
        >
          SunBakery
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{
            fontSize: "20px",
            maxWidth: "1000px",
            margin: "20px auto",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          We always prioritize customer satisfaction and listen to every
          criticism and suggestion given to improve the quality of our services.
        </Typography>
      </Box>
      {/* Form */}
      <Paper
        elevation={5}
        sx={{
          padding: "30px",
          borderRadius: "15px",
          width: "450px",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(5px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          marginBottom={2}
          sx={{ fontFamily: "Poppins, sans-serif" }}
        >
          Form to Fill
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={errors.name ? "Names can only contain letters" : ""}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={errors.phone ? "Phone numbers can only be numeric" : ""}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email ? "Invalid email format" : ""}
          />
          <TextField
            label="Complaints / Suggestions"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message ? "Message is required" : ""}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff9800",
              color: "white",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              "&:hover": { backgroundColor: "#e68900" },
            }}
            fullWidth
          >
            Confirm & Send
          </Button>
        </Box>
      </Paper>
      {/* Snackbar to show the message successfully sent */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Message sent successfully!
        </Alert>
      </Snackbar>
    </BackgroundContainer>
  );
};

export default Contact;

const BackgroundContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const BlurOverlay = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 5;
`;
