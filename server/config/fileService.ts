import cloudinary from "./cloudinary";

class FileService {
  async saveFile(file: string, folder: string): Promise<string | null> {
    try {
      const result = await cloudinary.uploader.upload(file, {
        folder,
        resource_type: "image",
      });
      return result.secure_url;
    } catch (e) {
      console.error(`Ошибка при загрузке файла в папку ${folder}:`, e);
      return null;
    }
  }

  async saveAvatar(file: string): Promise<string | null> {
    return this.saveFile(file, "avatars");
  }
  async savePostImage(file: string): Promise<string | null> {
    return this.saveFile(file, "posts");
  }
  async saveTourImage(file: string): Promise<string | null> {
    return this.saveFile(file, "tours");
  }
}

export default new FileService();
