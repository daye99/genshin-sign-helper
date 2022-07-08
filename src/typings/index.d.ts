
declare namespace OPTION{
    interface Headers{
        [key:string]:string
    }
}



declare namespace API {

    export interface Datum {
        name: string;
        type: number;
        value: string;
    }

    export interface DataSwitch {
        switch_id: number;
        is_public: boolean;
        switch_name: string;
    }

    export interface List {
        has_role: boolean;
        game_id: number;
        game_uid: string;
        game_role_id: string;
        nickname: string;
        region: string;
        level: number;
        background_image: string;
        is_public: boolean;
        data: Datum[];
        region_name: string;
        url: string;
        data_switches: DataSwitch[];
        h5_data_switches: any[];
    }

    export interface Data {
        list: List[];
    }

    export interface ResObject {
        retcode: number;
        message: string;
        data: Data;
    }

}


declare namespace SIGNINRO {

    export interface Data {
        total_sign_day: number;
        today: string;
        is_sign: boolean;
        first_bind: boolean;
        is_sub: boolean;
        month_first: boolean;
        sign_cnt_missed: number;
    }

    export interface ResObject {
        retcode: number;
        message: string;
        data: Data;
    }

}



declare namespace AWARDSAPI {

    export interface Award {
        icon: string;
        name: string;
        cnt: number;
    }

    export interface Data {
        month: number;
        awards: Award[];
        resign: boolean;
    }

    export interface ResObject {
        retcode: number;
        message: string;
        data: Data;
    }

}


