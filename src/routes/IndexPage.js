import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>DVA</h1>
      <Link to="/users">dash</Link>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
