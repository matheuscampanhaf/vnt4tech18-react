import React, { Component } from 'react';
import Card from '../JobCard/JobCard';
import Loading from '../../navigation/Loading/Loading';

import vagas from '../../../assets/vagas';
import axios from 'axios';

class JobList extends Component {

  state = {
    jobs: [],
    selectedId: null,
    hasError: false
  }

  componentDidMount() {
    axios.get('/jobs')
         .then(response => {
            this.setState({ jobs: response.data });
         })
         .catch(error => {
           console.error(error);console.error(error);
         })
  }

  jobRemoveHandler = (id, nome) => {
    if (window.confirm(`Deseja realmente excluir essa vaga "${nome}"?`)) {
      window.alert('Excluído com sucesso!');
    }
  }

  jobEditHandler = (id) => {
    console.log("Editar id " + id);
  }

  getJobCards() {
    const html = 
      this.state.jobs.map(vaga => {
        return  <div className="col-sm-12 col-md-6 col-lg-4 mb-3"
                  key={vaga.id}>
                  <Card vaga={vaga}
                    name={vaga.name}
                    description={vaga.description}
                    salary={vaga.salary}
                    area={vaga.area}
                    editHandler={() => this.jobEditHandler(vaga.id)}
                    removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}>
                  </Card>
                </div>
      })

    return html;
  }

  render() {

    let htmlGerado = null;

    if (this.state.jobs != undefined && this.state.jobs.length > 0) {
      htmlGerado = this.getJobCards();
    } else {
      htmlGerado = <Loading/>
    }

    // let htmlGerado = 
    //   (this.state.jobs != undefined && this.state.jobs.length > 0) ?
    //   this.getJobCards() : <Loading/>

    return (
      <div className="row">        
        {htmlGerado}
      </div>
    );
  }
}
export default JobList;