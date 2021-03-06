import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';

// Sections
import Speakers from '../components/speakers';
import Schedule from '../components/schedule';
import Map from '../components/map';
import Organization from '../components/organization';
import Volunteers from '../components/volunteers';
import RegisterButton from '../components/registerButton';

import '../styles/page.scss';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `React`,
        `React Week`,
        `Medellin`,
        `Globant`,
        `Developer Week`
      ]}
    />
    <Schedule />
    <Speakers />
    <Organization />
    <Map />
    <div className="rw-call-to-action">
      <RegisterButton />
    </div>
    <Volunteers />
  </Layout>
);

export default IndexPage;
