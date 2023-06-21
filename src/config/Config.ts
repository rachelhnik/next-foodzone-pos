interface Config {
    baseUrl: string;
    backofficeApiBaseUrl: string;
    orderAppUrl: string;
    orderAppApiBaseUrl: string;
    jwtSecret: string;
    spaceAccessKeyId: string;
    spaceSecretAccessKey: string;
    spaceEndPoint: string;
    databseUsername: string;
    databaseUrl: string;
    databasePassword: string;
    databaseName: string;
    googleClientId: string;
    googleClientSecret: string;
}

export const config: Config = {
    baseUrl: process.env.NEXTAUTH_URL || "",
    backofficeApiBaseUrl: process.env.NEXT_PUBLIC_BACKOFFICE_API_BASE_URL || "",
    orderAppUrl: process.env.NEXT_PUBLIC_ORDERAPP_URL || "",
    orderAppApiBaseUrl: process.env.NEXT_PUBLIC_ORDERAPP_API_BASE_URL || "",
    jwtSecret: process.env.JWT_SECRET || "",
    spaceAccessKeyId: process.env.SPACE_ACCESS_KEY_ID || "",
    spaceSecretAccessKey: process.env.SPACE_SECRET_ACCESS_KEY || "",
    spaceEndPoint: process.env.SPACE_ENDPOINT || "",
    databaseName: process.env.DATABASE_NAME || "",
    databaseUrl: process.env.DATABASE_URL || "",
    databseUsername: process.env.DATABASE_USERNAME || "",
    databasePassword: process.env.DATABASE_PASSWORD || "",
    googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
};
