import React from 'react';
import Inner from '../components/layouts/Inner'
import GridRow from '../components/layouts/GridRow'
import GridColumn from '../components/layouts/GridColumn'
import config from '../config';

const innerCustomCSS = `
  padding: 40px 0;
`

const gridRowCustomCSS = `
  @media only screen and (min-width: ${config.breakpoints.tabletPortrait}) {
    margin-bottom: 20px;
  }
`

const gridColumnCustomCSS = `
  padding: 20px;
  background: #f1f1f1;
  @media only screen and (max-width: ${config.breakpoints.tabletPortrait}) {
    margin-bottom: 20px;
  }
`

const gridColumnCustomCSS2 = `  
  padding: 20px;
  background: #e8e8e8;
  @media only screen and (max-width: ${config.breakpoints.tabletPortrait}) {
    margin-bottom: 20px;
  }
`

const HomePage = () => {
  
  return (
    <Inner customCSS={innerCustomCSS}>
      <h1>Simple grid system using styled components</h1>
      
      <h2>Flexible grid</h2>
      <p>In flexible grid system we can add as many columns as we like. The columns will have equal widths.</p>      
      
      <GridRow customCSS={gridRowCustomCSS}>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
      </GridRow>
      
      <GridRow customCSS={gridRowCustomCSS}>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
          Grid Column
        </GridColumn>
      </GridRow>

      <GridRow customCSS={gridRowCustomCSS}>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
          Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
        Grid Column
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
          Grid Column
        </GridColumn>
      </GridRow>

      <h2>Percentage based grid</h2>
      <p>We can build any percantage base grid by assinging values to the <code>width</code> parameters. 
      The columns without assigned width will fill up the remaining space.</p>      
      <GridRow customCSS={gridRowCustomCSS}>
        <GridColumn width="30%" customCSS={gridColumnCustomCSS}>
        Grid Column 
        </GridColumn>
        <GridColumn customCSS={gridColumnCustomCSS}>
          Grid Column
        </GridColumn>        
      </GridRow>

      <h2>Removing the gutters</h2>
      <p>Setting the <code>margin</code> parameter to 0, we'll remove gutters between the columns.</p>
      <GridRow customCSS={gridRowCustomCSS}>
        <GridColumn width="20%" margin="0" customCSS={gridColumnCustomCSS2}>
        Grid Column 
        </GridColumn>
        <GridColumn margin="0" customCSS={gridColumnCustomCSS}>
          Grid Column
        </GridColumn>
        <GridColumn width="20%" margin="0" customCSS={gridColumnCustomCSS2}>
        Grid Column 
        </GridColumn>
      </GridRow>
    </Inner>
  )

}

export default HomePage;