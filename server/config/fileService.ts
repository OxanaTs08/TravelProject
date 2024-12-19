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

  async saveHotelImage(file: string): Promise<string | null> {
    return this.saveFile(file, "hotels");
  }

  async saveDestinationImage(file: string): Promise<string | null> {
    return this.saveFile(file, "destinations");
  }

  async saveTipImage(file: string): Promise<string | null> {
    return this.saveFile(file, "tips");
  }

  async saveRestaurantImage(file: string): Promise<string | null> {
    return this.saveFile(file, "restaurants");
  }

  async saveTourImage(file: string): Promise<string | null> {
    return this.saveFile(file, "tours");
  }
}

export default new FileService();
