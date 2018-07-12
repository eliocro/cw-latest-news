
import { Component, Prop, State } from '@stencil/core';
import moment from 'moment';
import Solr from '../../solr';

const site = 'http://www.cw.no';
const imagePath = 'http://static.cw.newsfront.no/sites/default/files/styles/crop_image_hero_small/public';


function parseArticle (doc) : void {
  doc.media = doc.media && JSON.parse(doc.media);
  if(doc.media && doc.media.image) {
    const image = doc.media.image.main;
    doc.image_url = `${imagePath}/${image.path}`;
  }
  doc.url = `${site}/${doc.path_alias}`;
}

function formatDate (ts) : string {
  return moment(ts).format('ddd D MMM, [kl] HH:mm');
}


@Component({
  tag: 'cw-latest-news',
  styleUrl: 'style.scss',
  shadow: true
})
export class LatestNews {
  @State() articles: any[];
  @Prop() tag: string;
  @Prop() rows: number;
  @Prop() start: number;

  @Prop() solr: string;
  @Prop() solrProxy: string;
  solrClient: Solr;

  load = async () => {
    try {
      // console.log('Loading articles for tag', this.tag);
      const data = await this.solrClient.getArticles(this.rows, this.start, this.tag);
      data.docs.forEach(d => parseArticle(d));
      // console.log('Loaded', data.docs);

      this.articles = data.docs;
    }
    catch(err) {
      console.log(err);
    }
  };

  componentDidLoad () {
    if(!this.solr) {
      return;
    }
    this.solrClient = new Solr(this.solr, this.solrProxy);
    this.load();
  }

  render () {
    const articles = this.articles || [];
    return (
      <div class="cw-latest-news">
        <header><h2>Siste nyheter</h2></header>
        <ul>
          { articles.map((item, idx) => (
            <li class="clearfix" key={ idx }>
              <a href={ item.url } target="_blank" rel="noreferrer noopener">
                <img src={ item.image_url } alt={ item.short_title } />
                <div>
                  <h3>{ item.short_title }</h3>
                  <time class="published">Publisert: { formatDate(item.published) }</time>
                </div>
              </a>
            </li>
          )) }
        </ul>
        <footer>
          { this.tag && (
            <span class="more">
              <a href={ `${site}/emne/${this.tag}` } target="_blank" rel="noreferrer noopener">Flere nyheter
                <img src={ `${site}/sites/computerworld/img/arrow-right.png` } alt="ComputerWorld.NO" />
              </a>
            </span>
          ) }
          <h3>
            <a href={ `${site}/om/abonnement` } target="_blank"
              rel="noreferrer noopener">Meld deg på vårt nyhetsbrev</a>
          </h3>
        </footer>
      </div>
    );
  }
}