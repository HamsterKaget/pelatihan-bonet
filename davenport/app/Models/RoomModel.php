<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomModel extends Model
{
    protected $table = 'category_room';
    use HasFactory;

    protected  $fillable = [
        'category_name',
    ];
}
