// import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
// import CollectionPage from '../collection/collection.component';

// import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class ShopPage extends React.Component  {
//   state = {
//     loading: true
//   };
//   unsubscribeFromSnapshot = null;

//    componentDidMount () {
//      const { updateCollections } = this.props;
//      const CollectionRef = firestore.collection('collections');

//      this.unsubscribeFromSnapshot = CollectionRef.onSnapshot(async snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//       this.setState({ loading: false});
//      });
//    }

//   render() {
//   const { match } = this.props;
//   const { loading } = this.state;
//     return (
//       <div className='shop-page'>
//         <Route 
//         exact path={`${match.path}`} 
//         render={props => (
//         <CollectionsOverviewWithSpinner isLoading={loading} {...props }  /> 
//         )}/>
//         <Route path={`${match.path}/:collectionId`} 
//         render = {props => (
//         <CollectionPageWithSpinner isLoading={loading} {...props} />
//         )}/>
//       </div>  
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap => 
//   dispatch(updateCollections(collectionsMap))
// });
 

// export default connect(null, mapDispatchToProps)(ShopPage);


import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
 fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);