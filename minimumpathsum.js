var minPathSum = function(grid) {
    
        let rows = grid.length;
        let columns = grid[0].length;
        for (var row=0; row < rows; row++) {
            for (var column=0; column < columns; column++) {
                if (row -1 >=0 && column-1 >=0) {
                    grid[row][column] = Math.min(grid[row-1][column] + grid[row][column], grid[row][column-1] + grid[row][column]);
                    continue;
                }
                if (row -1 >=0) {
                    grid[row][column] = grid[row][column] + grid[row-1][column];
                    continue;
                }
                if (column -1 >= 0) {
                   grid[row][column] = grid[row][column] + grid[row][column-1];
                }
            }
        }
        return grid[rows -1][columns -1];
    }
