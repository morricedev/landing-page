import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mapData } from '../../api/mapData';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = 'Página não encontrada';
    }

    if (data && !data.slug) {
      document.title = 'Carregando ...';
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      {sections.map((section, i) => {
        const { component } = section;
        const key = `${slug}-${i}`;
        switch (component) {
          case 'section.section-two-columns':
            return <GridTwoColumns key={key} {...section} />;
          case 'section.section-content':
            return <GridContent key={key} {...section} />;
          case 'section.section-grid-text':
            return <GridText key={key} {...section} />;
          case 'section.section-grid-image':
            return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
