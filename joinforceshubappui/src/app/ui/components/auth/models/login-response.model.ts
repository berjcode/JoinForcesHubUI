    export class LoginResponseModel{
        result: {
            id: string;
            firstname: string;
            surName: string;
            email: string;
            token: string;
            photoPath: string;
            coverPhoto: string;
            accessTokenExpiration: string;
            refreshToken: string;
            userJobTitle: string;
          };
          message: string;
          errors: any;
    }