import ImageColors from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/lib/typescript/types";

export const getImageColors = async ( uri: string) => {

    // const movie = nowPlaying[ index ];
    // const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
    // console.log( uri );
    const colors = await ImageColors.getColors( uri, {});
    console.log( colors );

    let primary;
    let secondary;

    if ( colors.platform === "android") {
        primary = colors.dominant;
        secondary = colors.average;
    } else if ( colors.platform === "ios") {
        primary = colors.primary;
        secondary = colors.secondary;
    }

    return [ primary, secondary ];

}