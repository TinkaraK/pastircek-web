<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Farm extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "address",
        "gmid"
    ];

    public function users() {
        return $this->hasMany(User::class);
    }
}
