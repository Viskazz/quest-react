import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { changeSettingsProp } from '../../actions/settingsActions';
import { postSettings, isNumber } from '../../api';
import CustomTableCell from '../Elements/TableCell/CustomTableCell';
import SettingsForm from './SettingsForm';

class SettingsList extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onChange = (e) => {
    let field = [];
    if (isNumber(e.target.value))
      field[e.target.name] = Number(e.target.value);
    else
      field[e.target.name] = e.target.value;
    this.props.onChangeSettingsProp(field);
    this.submitSettings();
  }

  onCheckboxChange = (e) => {
    let field = [];
    field[e.target.name] = e.target.checked;
    this.props.onChangeSettingsProp(field);
    this.submitSettings();
  }

  submitSettings = () => {
    postSettings(this.props.settings)
      .then((result) => {
        // this.props.onUpdateAgentSuccess(result);
        console.log('success:', result)
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {

    return (<form onSubmit={ this.onSubmit }>
              <div className="tableWrapper">
                <Table>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell width="55%">Пaраметр</CustomTableCell>
                      <CustomTableCell width="15%">Значение</CustomTableCell>
                      <CustomTableCell width="15%"></CustomTableCell>
                      <CustomTableCell width="15%"></CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <SettingsForm settings={ this.props.settings } 
                    onChange={ this.onChange } 
                    onItegerChange = {this.onItegerChange }
                    onCheckboxChange={ this.onCheckboxChange } />
                  </TableBody>
                </Table>
              </div>
              
            </form>
      );
  }
};

SettingsList.propTypes = {
  documentsTimeout: PropTypes.number
};

const mapStateToProps = state => {
  return {
    settings: state.settings,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeSettingsProp: field => dispatch(changeSettingsProp(field)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsList);