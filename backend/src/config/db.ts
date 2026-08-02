import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined.");
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB Connected Successfully");
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";

    console.error("MongoDB Connection Error:", message);

    throw new Error(`Database connection failed: ${message}`);
  }
};
