    export class LoginResponseModel{
        result: {
            id: string;
            firstname: string;
            surName: string;
            email: string;
            token: string;
            accessTokenExpiration: string;
            refreshToken: string;
          };
          message: string;
          errors: any;
    }