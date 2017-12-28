import React from 'react';

export class Image extends React.Component {
        constructor(){
            super();
            this.pics={
                autumn: 'http://cdn.pcwallart.com/images/red-autumn-trees-wallpaper-1.jpg',
                spring: 'http://images.all-free-download.com/images/graphicthumb/spring_tree_204087.jpg',
                angularjs: 'https://d1067y8t86k9le.cloudfront.net/wp-content/uploads/2016/04/22150642/angular_js.jpg',
                reactjs: 'https://cdn-images-1.medium.com/max/1600/0*58uOnDmROVICvDMe.png'
            };

            this.state={srcSeason:this.pics.autumn};
            this.nextSeason='Spring';
            this.nextCourse='angularjs';
            this.changeSeason=this.changeSeason.bind(this);
            this.changeCourse=this.changeCourse.bind(this);
        }

    // re-rendering through set state
        changeSeason(e){
            console.log("Image is clicked");
            let src;
            if (this.state.srcSeason===this.pics.autumn){
                       src=this.pics.spring;
                       this.nextSeason='autumn'
                } else {
                        src=this.pics.autumn;
                        this.nextSeason='spring'
                }
            this.setState({srcSeason:src});
            e.preventDefault();
        }

    // re-rendering through set attribute  - no state used
    changeCourse(e) {
        if(this.nextCourse==='angularjs'){
            this.nextCourse='reactjs';
            e.target.setAttribute('src', this.pics.angularjs);

        } else {
            this.nextCourse='angularjs';
            e.target.setAttribute('src', this.pics.reactjs);
        }
        e.preventDefault();
    }
        render(){
        return(
            <div id="image">
                <div>
                    <h3> Click on the Image for an early {this.nextSeason} (Method 1)</h3>
                    <img src={this.state.srcSeason} width="300px" onClick={this.changeSeason} height="200px"/>
                </div>
                <div >
                    <h3> Click on the Image to switch to {this.nextCourse} (Method 2) </h3>
                    <img src={this.pics.reactjs} width="300px" onClick={this.changeCourse} height="200px"/>  :
                </div>
            </div>
        )
    }
}

