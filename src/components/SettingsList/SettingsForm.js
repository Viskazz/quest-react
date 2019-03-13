import React, { Fragment } from 'react';
import TableRow from '@material-ui/core/TableRow';
import CustomTableCell from '../Elements/TableCell/CustomTableCell';
import SubHeaderTableCell from '../Elements/TableCell/SubHeaderTableCell';
import { TextField } from 'material-ui';
import Switcher from '../Elements/Switcher/Switcher';

class SettingsForm extends React.Component {

  render() {
    const {groupsTimeout, documentsTimeout, showMainMenuHeader, showSubMenuHeader, showDocumentHeader, mainMenuHeaderImage, subMenuHeaderImage, documentHeaderImage, mainMenuBackgroundHeight, subMenuBackgroundHeight, documentBackgroundHeight, backgroundColor, backgroundImage, cardHeight, cardWidth, buttonBackgroundColor, buttonForegroundColor, buttonBorderColor, buttonBorderStyle, buttonBorderRadius, buttonPadding, buttonMargin, backButtonBackgroundColor, backButtonForegroundColor} = this.props.settings;

    return (<Fragment>
              <TableRow>
                <CustomTableCell width="70%">Время (в мин) для возврата из подменю</CustomTableCell>
                <CustomTableCell width="15%">
                  <TextField name="groupsTimeout" value={ groupsTimeout } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Время (в мин) для возврата из документа</CustomTableCell>
                <CustomTableCell>
                  <TextField name="documentsTimeout" value={ documentsTimeout } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>

              <TableRow>
                <SubHeaderTableCell colSpan="4">Основные параметры доски и карточек</SubHeaderTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Цвет фона</CustomTableCell>
                <CustomTableCell>
                  <TextField name="backgroundColor" value={ backgroundColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Изображение фона</CustomTableCell>
                <CustomTableCell>
                  <TextField name="backgroundImage" value={ backgroundImage } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Ширина карточки</CustomTableCell>
                <CustomTableCell>
                  <TextField name="cardWidth" value={ cardWidth } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Высота карточки</CustomTableCell>
                <CustomTableCell>
                  <TextField name="cardHeight" value={ cardHeight } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>

              <TableRow>
                <SubHeaderTableCell colSpan="4">Внешний вид кнопок</SubHeaderTableCell>
              </TableRow>

              <TableRow>
                <CustomTableCell>Цвет кнопок</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonBackgroundColor" value={ buttonBackgroundColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Цвет текста кнопок</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonForegroundColor" value={ buttonForegroundColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Цвет окантовки кнопок</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonBorderColor" value={ buttonBorderColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Стиль окантовки кнопок</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonBackgroundColor" value={ buttonBorderStyle } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Радус окантовки кнопок</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonBorderRadius" value={ buttonBorderRadius } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Отступ текста внутри кнопки</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonPadding" value={ buttonPadding } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Отступ кнопок друг от друга</CustomTableCell>
                <CustomTableCell>
                  <TextField name="buttonMargin" value={ buttonMargin } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>

              <TableRow>
                <SubHeaderTableCell colSpan="4">Внешний вид кнопки "НАЗАД":</SubHeaderTableCell>
              </TableRow>

              <TableRow>
                <CustomTableCell>Цвет кнопки "НАЗАД"</CustomTableCell>
                <CustomTableCell>
                  <TextField name="backButtonBackgroundColor" value={ backButtonBackgroundColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>Цвет текста кнопки "НАЗАД"</CustomTableCell>
                <CustomTableCell>
                  <TextField name="backButtonForegroundColor" value={ backButtonForegroundColor } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>

              <TableRow>
                <SubHeaderTableCell>Шапка для элемента:</SubHeaderTableCell>
                <SubHeaderTableCell>Задействовать</SubHeaderTableCell>
                <SubHeaderTableCell>Файл шапки</SubHeaderTableCell>
                <SubHeaderTableCell>Высота шапки (пикс.)</SubHeaderTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell> - главного меню</CustomTableCell>
                <CustomTableCell>
                  <Switcher name="showMainMenuHeader" checked={ showMainMenuHeader } onCheckboxChange={ this.props.onCheckboxChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="mainMenuHeaderImage" value={ mainMenuHeaderImage } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="mainMenuBackgroundHeight" value={ mainMenuBackgroundHeight } onChange={ this.props.onChange } />
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell>- подменю</CustomTableCell>
                <CustomTableCell>
                  <Switcher name="showSubMenuHeader" checked={ showSubMenuHeader } onCheckboxChange={ this.props.onCheckboxChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="subMenuHeaderImage" value={ subMenuHeaderImage } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="subMenuBackgroundHeight" value={ subMenuBackgroundHeight } onChange={ this.props.onChange } />
                </CustomTableCell>
              </TableRow>
              <TableRow>
                <CustomTableCell> - документа</CustomTableCell>
                <CustomTableCell>
                  <Switcher name="showDocumentHeader" checked={ showDocumentHeader } onCheckboxChange={ this.props.onCheckboxChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="documentHeaderImage" value={ documentHeaderImage } onChange={ this.props.onChange } />
                </CustomTableCell>
                <CustomTableCell>
                  <TextField name="documentBackgroundHeight" value={ documentBackgroundHeight } onChange={ this.props.onChange } />
                </CustomTableCell>
              </TableRow>
            </Fragment>
      );
  }
}

export default SettingsForm