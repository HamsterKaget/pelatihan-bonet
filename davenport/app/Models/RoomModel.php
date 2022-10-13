<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomModel extends Model
{
    protected $table = 'room';
    use HasFactory;

    protected  $fillable = [
        'room_name',
        'room_short_description',
        'room_description',
        'room_image',
        'room_price',
        'room_stock',
        'category_id',
    ];
}
