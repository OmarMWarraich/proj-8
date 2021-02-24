export type Maybe<T> = T | null;

export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
  };

  export type LaunchRocket = {
    __typename?: 'Launch';
    rocket_id?: Maybe<Scalars['String']>;
    rocket_name?: Maybe<Scalars['String']>;
    rocket_type?: Maybe<Scalars['String']>;

  }

  export type LaunchLinks = {
    __typename?: 'LaunchLinks';
    flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  };
export interface lunchprops {
    details :string
    flight_number: number
    launch_date_local: string

    launch_success: boolean
    launch_year: number
    // rocket_name: Maybe<Scalars['String']>;
    links?: Maybe<LaunchLinks>;
    mission_name: string
    rocket?: Maybe<LaunchRocket>;
    upcoming: boolean
}