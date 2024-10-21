import { WelcomeBlock } from "root/entities/session";

import { Template } from "./template";

export const Fallback = () => <Template welcomeBlock={<WelcomeBlock />} />;
