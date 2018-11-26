import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import FeedData from '../containers/FeedData';
import FeedSubscriptionData from '../containers/FeedSubscriptionData';
import CheckAuth from '../containers/CheckAuth';
import ListComments from './ListComments';
import GetUser from '../containers/GetUser';
import LoginContainer from '../containers/LoginContainer';
import Notice from './Notice';
import CommentFormContainer from '../containers/CommentFormContainer';

const styles = theme => ({
  page: {
    marginBottom: theme.spacing.unit * 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const enhanced = compose(withStyles(styles));

export default enhanced(({ classes }) => (
  <div className={classes.page}>
    <GetUser>
      {props => <LoginContainer {...props} />}
    </GetUser>
    <CheckAuth>
      <CommentFormContainer />
    </CheckAuth>
    <FeedSubscriptionData>
      {props => <Notice {...props} />}
    </FeedSubscriptionData>
    <GetUser>
      {({ data }) => (
        <FeedData user={data && data.me}>{props => <ListComments {...props} />}</FeedData>
      )}
    </GetUser>
  </div>
));
