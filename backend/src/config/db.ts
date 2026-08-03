import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined.");
    }

    const conn = await mongoose.connect(mongoUri);

    console.log("MongoDB Connected Successfully");
    console.log("Host:", conn.connection.host);
    console.log("Database Name:", conn.connection.name);
    console.log("Connection Port:", conn.connection.port);
    console.log("Connection Ready State:", conn.connection.readyState);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("MongoDB Connection Error:", message);
    throw new Error(`Database connection failed: ${message}`);
  }
};
