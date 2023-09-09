import { range } from './utils';

function Grid({ numRows, numCols }) {
  
  const row = range(numRows)
  const col = range(numCols)

  return (
    <div className="grid">
      {row.map((row) => {
        return (
          <div className="row" key={crypto.randomUUID()}>
            {col.map((col) => {
              return (
                <div className="col" key={crypto.randomUUID()}>  
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
