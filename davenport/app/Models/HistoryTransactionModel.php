<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HistoryTransactionModel extends Model
{
    use HasFactory;

    protected $table = 'history_transaction';
    protected $fillable = [
        'invoice_id',
        'type',
        'paid_at',
        'status',
        'user_id',
    ];
}
