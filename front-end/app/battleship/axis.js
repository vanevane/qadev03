/**
 * Created by vanessavargas on 6/26/2015.
 */

var Axis = function(col, row)
{
    var _axis = [col, row];

    this.getColumn = function()
    {
        return _axis[0];
    };

    this.getRow = function()
    {
        return _axis[1];
    };

};