/**
 * Created by vanessavargas on 6/22/2015.
 * Ship creation
 * The ship has a size, status, initial position, and value
 */

var Ship =function(id, size, initPos)
{
    this.id = id;
    this.size = size;
    this.position = initPos;
    this.status = 'ALIVE';
    this.value = size * 10;

    this.getPosition = function()
    {
        return this.position;
    };

    this.getStatus = function()
    {
        return this.status;
    };

    this.setStatus = function()
    {
        this.status = 'KILLED';
    };

    this.getSize = function()
    {
        return this.size;
    };

    this.getValue = function()
    {
        return this.value;
    };
    this.getId = function()
    {
        return this.id;
    };
};



