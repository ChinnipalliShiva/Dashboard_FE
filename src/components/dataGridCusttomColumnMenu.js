// import {
//   GridColumnMenuContainer,
//   GridColumnMenuFilterItem,
//   GridColumnMenuHideItem,
// } from "@mui/x-data-grid";

// const CustomColumnMenu = (props) => {
//   const { hideMenu, currentColumn, open } = props;
//   if (!currentColumn || !currentColumn.field) {
//     console.error("currentColumn is undefined or missing the 'field' property");
//     return null;
//   }
//   return (
//     <GridColumnMenuContainer
//       hideMenu={hideMenu}
//       currentColumn={currentColumn}
//       open={open}
//     >
//       <GridColumnMenuFilterItem onClick={hideMenu} column={currentColumn} />
//       <GridColumnMenuHideItem onClick={hideMenu} column={currentColumn} />
//     </GridColumnMenuContainer>
//   );
// };
// export default CustomColumnMenu;
