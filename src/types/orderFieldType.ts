import { orderScheme } from "schemes";
import { z } from "zod";

export type orderFieldType = z.infer<typeof orderScheme>;
