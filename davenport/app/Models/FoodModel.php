<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodModel extends Model
{
    use HasFactory;

    protected $table = 'food';
    protected $fillable = [
        'food_id',
        'food_name',
        'food_description',
        'food_price',
        'stock'
    ];
}
