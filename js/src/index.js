import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';
import Menu from '@mui/material/Menu';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import { DataGrid } from '@mui/x-data-grid';

import * as IconsMaterial from "@mui/icons-material";
const iconsDict = {...IconsMaterial}

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import React from "react";
import ReactDOM from "react-dom";


export function bind(node) {
  return {
    create: (type, props, children) =>
      React.createElement(type, props, ...children),
    render: (element) => {
      ReactDOM.render(element, node);
    },
    unmount: () => ReactDOM.unmountComponentAtNode(node),
  };
}

export function MDButton({ children, ...attrs }) {
  return (<Button {...attrs}>{children}</Button>);
}

export function MDButtonGroup({ children, ...attrs}) {
  return (
    <ButtonGroup {...attrs}>{children}</ButtonGroup>
  );
}

export function MDAutoComplete(attrs) {
  return (
    <Autocomplete 
      {...attrs} 
      renderInput={(params) => <TextField {...params} label={attrs.label} />}
    />
  );
}

export function MDCheckbox(attrs) {
  return <Checkbox {...attrs} />;
}

export function MDSelect({children, ...attrs}) {
  return (
    <Select {...attrs}>
      {children}
    </Select>
  );
}

export function MDGrid({ children, ...attrs}) {
  return (
    <Grid {...attrs}>
      {children}
    </Grid>
  );
}

export function MDContainer({ children, ...attrs}) {
  return (
    <Container {...attrs}>
      {children}
    </Container>
  );
}

export function MDBox({ children, ...attrs}) {
  return (
    <Box {...attrs}>
      {children}
    </Box>
  );
}

export function MDTextField(attrs){
  return <TextField {...attrs} />
}

export function MDIcon(attrs){
  let DynamicIcon = iconsDict[attrs.icon];
  return <DynamicIcon {...attrs} />
}

export function MDTypography({ children, ...attrs}) {
  return <Typography {...attrs}>{children}</Typography>
}

export function MDTableContainer({ children, ...attrs}) {
  return <TableContainer {...attrs}>{children}</TableContainer>
}

export function MDTable({ children, ...attrs}) {
  return <Table {...attrs}>{children}</Table>
}

export function MDTableBody({ children, ...attrs}) {
  return <TableBody {...attrs}>{children}</TableBody>
}

export function MDTableCell({ children, ...attrs}) {
  return <TableCell {...attrs}>{children}</TableCell>
}

export function MDTableHead({ children, ...attrs}) {
  return <TableHead {...attrs}>{children}</TableHead>
}

export function MDTableRow({ children, ...attrs}) {
  return <TableRow {...attrs}>{children}</TableRow>
}

export function MDStack({ children, ...attrs}) {
  return <Stack {...attrs}>{children}</Stack>
}

export function MDTab({ children, ...attrs}) {
  return <Tab {...attrs}>{children}</Tab>
}

export function MDTabs({ children, ...attrs}) {
  return <Tabs {...attrs}>{children}</Tabs>
}

export function MDPagination(attrs) {
  return <Pagination {...attrs} />
}

export function MDMenu({ children, ...attrs}) {
  return <Menu {...attrs}>{children}</Menu>
}

export function MDMenuItem({ children, ...attrs}) {
  return <MenuItem {...attrs}>{children}</MenuItem>
}

export function MDSpeedDial({ children, ...attrs}) {
  return <SpeedDial {...attrs}>{children}</SpeedDial>
}

export function MDSpeedDialAction(attrs) {
  return <SpeedDialAction {...attrs} />
}

export function MDCircularProgress(attrs) {
  return <CircularProgress {...attrs} />
}

export function MDLinearProgress(attrs) {
  return <LinearProgress {...attrs} />
}

export function MDAlert({ children, ...attrs }) {
  return <Alert {...attrs}>{children}</Alert>
}

export function MDAccordion({ children, ...attrs }) {
  return <Accordion {...attrs}>{children}</Accordion>
}

export function MDAccordionSummary({ children, ...attrs }) {
  return <AccordionSummary {...attrs}>{children}</AccordionSummary>
}

export function MDAccordionActions({ children, ...attrs }) {
  return <AccordionActions {...attrs}>{children}</AccordionActions>
}

export function MDAccordionDetails({ children, ...attrs }) {
  return <AccordionDetails {...attrs}>{children}</AccordionDetails>
}

export function MDSwitch(attrs) {
  return <Switch {...attrs} />
}

export function MDChip(attrs) {
  return <Chip {...attrs} />
}

export function MDFormControl({ children, ...attrs}) {
  return <FormControl {...attrs}>{children}</FormControl>
}

export function MDInputLabel({ children, ...attrs}) {
  return <InputLabel {...attrs}>{children}</InputLabel>
}

export function MDDataGrid(attrs) {
  return <DataGrid {...attrs} />
}
