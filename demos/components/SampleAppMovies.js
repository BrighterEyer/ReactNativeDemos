import React, { Component } from "react";
import { FlatList, Alert, Image, StyleSheet, Text, View } from "react-native";


export default class SampleAppMovies extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        var moviesUrl = "http://api.map.baidu.com/telematics/v3/movie?qt=hot_movie&location=%E5%B9%BF%E5%B7%9E&ak=fCWHp1a9QdsHwfPbHZ20LGLzgpKHEGrc&output=json";
        return fetch(moviesUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.result.movie,
                }, function() {
                    // Alert.alert(responseJson.date)
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _movieItemView(movie) {
        return (
            <View style={styles.container}>
            <Image source={{ uri: movie.movie_picture }} style={styles.thumbnail} />
            <View style={styles.rightContainer}>
              <Text>{movie.movie_id}</Text>
              <Text>{movie.movie_name}</Text>
              <Text>{movie.movie_type}</Text>
              <Text>{movie.movie_release_date}</Text>
              <Text>{movie.movie_nation}</Text>
              <Text>{movie.movie_starring}</Text>
              <Text>{movie.movie_length}</Text>
              <Text>{movie.movie_score}</Text>
              <Text>{movie.movie_director}</Text>
              <Text>{movie.movie_tags}</Text>
              <Text>{movie.movie_message}</Text>
              <Text>{movie.is_imax}</Text>
              <Text>{movie.is_new}</Text>
              <Image source={{ uri: movie.movie_big_picture }} style={styles.thumbnail} />
              <Text>{movie.movies_wd}</Text>
            </View>
          </View>
        );
    }

    render() {
        if (this.state.dataSource != null) {
            return (
                <View style={{flex: 1, paddingTop:20}}>
                    <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => this._movieItemView(item)}
                      keyExtractor={(item, index) => item.movie_id}
                    />
                </View>
            );
        }

        return (
            <View style={styles.container}>
		       <Text>hello world!</Text>
		   </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
});