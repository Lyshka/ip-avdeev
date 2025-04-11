import { orderScheme } from "schemes/orderScheme";
import { z } from "zod";

export type orderFieldType = z.infer<typeof orderScheme>;
