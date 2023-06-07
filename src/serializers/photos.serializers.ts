import { z } from "zod";

const photoResponseSerializer = z.object({
  id: z.string(),
  imageLink: z.string(),
  isCover: z.boolean().default(false),
});

const photoRequestWithoutCarIdSerializer = photoResponseSerializer.omit({
  id: true,
});

const photoRequestSerializer = photoResponseSerializer.omit({
  id: true,
});

const allPhotosRequestWithoutCarIdSerializer =
  photoRequestWithoutCarIdSerializer.array();

const allPhotosRequestSerializer = photoRequestSerializer.array();

const allPhotosResponseSerializer = photoResponseSerializer.array();

export {
  allPhotosResponseSerializer,
  allPhotosRequestSerializer,
  allPhotosRequestWithoutCarIdSerializer,
  photoRequestSerializer,
  photoRequestWithoutCarIdSerializer,
  photoResponseSerializer,
};
