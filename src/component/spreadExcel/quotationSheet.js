import React from 'react';
import '@grapecity/spread-sheets-resources-zh';
//GC.Spread.Common.CultureManager.culture("zh-cn");
import GC from '@grapecity/spread-sheets';
import {SpreadSheets} from '@grapecity/spread-sheets-react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import '../../style/style.css';

console.log('QuotationSheet');

class QuotationSheet extends React.Component {

    constructor(props) {
        super(props);
        this.spread = null;
    }

    render() {
        console.log(this.props);
        return (
            <div className="sample-tutorial">
                <div className="sample-spreadsheets">
                    <SpreadSheets workbookInitialized={spread => this.initSpread(spread)}>
                    </SpreadSheets>
                </div>
            </div>
        )
    }

    initSpread(spread) {
        console.log('success');
    }
}

export default QuotationSheet
