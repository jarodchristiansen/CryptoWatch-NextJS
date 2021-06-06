import classes from './financial-data.module.css'

function FinancialData(props) {
    const {supply, one, seven, thirty} = props;
    return (
        <div className={classes.financialData}>
            <div className={classes.row}>
            <p className={classes.datapoint}>{'supply:' + supply}</p>
            
            </div>
            <div className={classes.row}>
            <p className={classes.datapoint}>{'one:' + one}</p>
            <p className={classes.datapoint}>{'seven:' + seven}</p>
            <p className={classes.datapoint}>{'thirty:' + thirty}</p>
            </div>
        </div>
    )
}


export default FinancialData;