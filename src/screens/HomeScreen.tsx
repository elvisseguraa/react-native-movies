import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';

const { width: windowWith } = Dimensions.get('window');

import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';


export const HomeScreen = () => {

    const { 
        nowPlaying,
        popular,
        topRated,
        upcoming,
        isLoading 
    } = useMovies();
    
    const { top } = useSafeAreaInsets();
    
    const { setMainColors } = useContext( GradientContext );

    const getPosterColors = async ( index: number) => {

        const movie = nowPlaying[ index ];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
        // console.log( uri );
        const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
        // console.log( primary, secondary );

        setMainColors({ primary: primary, secondary: secondary })

    }

    useEffect(() => {
      if ( nowPlaying.length > 0) {
        getPosterColors(0);
      }
    }, [ nowPlaying ])
    

    if ( isLoading ) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <ActivityIndicator 
                    color="red"
                    size={ 100 }
                />
            </View>
        )
    }

    // console.log( peliculasEnCine[2]?.title )

  return (

    <GradientBackground>

        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                
                {/* Carousel Principal */}
                <View style={{
                    height: 440,
                    // backgroundColor: 'red',
                }}>
                    <Carousel 
                        data={ nowPlaying }
                        renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                        sliderWidth={ windowWith }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={ index => getPosterColors( index ) }
                    />
                </View>


                <HorizontalSlider title="Popular" movies={ popular } />
                <HorizontalSlider title="Top Rated" movies={ topRated } />
                <HorizontalSlider title="Upcoming" movies={ upcoming } />

            </View>
        </ScrollView>
    </GradientBackground>

  )
}

const styles = StyleSheet.create({
    
});