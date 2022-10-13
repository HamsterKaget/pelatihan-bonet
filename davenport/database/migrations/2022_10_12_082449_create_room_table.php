<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room', function (Blueprint $table) {
            $table->id('room_id');
            $table->string('room_name');
            $table->string('room_short_description');
            $table->text('room_description');
            $table->string('room_image');
            $table->float('room_price');
            $table->integer('room_stock');
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('category_id')->on('category_room')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room');
    }
}
