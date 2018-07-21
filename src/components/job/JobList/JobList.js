import React, { Component } from 'react';
import Card from '../JobCard/JobCard';

import vagas from '../../../assets/vagas';

class JobList extends Component {

  state = {
    jobs: [],
    selectedId: null,
    hasError: false
  }

  componentDidMount() {
    this.setState({ jobs: vagas });
  }

  jobRemoveHandler = (id, nome) => {
    if (window.confirm(`Deseja realmente excluir essa vaga "${nome}"?`)) {
      window.alert('Excluído com sucesso!');
    }
  }

  jobEditHandler = (id) => {
    console.log("Editar id " + id);
  }

  render() {

    let vagasEncontradas = 
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
      });

    return (
      <div className="row">        
        {vagasEncontradas}
      </div>
    );
  }
}
export default JobList;