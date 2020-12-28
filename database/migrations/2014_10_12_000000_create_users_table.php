<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('username');
            $table->string('role');
            $table->string('password');
            $table->text('bio')->nullable()->default(null);
            $table->string('facebook')->nullable()->default(null);
            $table->string('twitter')->nullable()->default(null);
            $table->string('api_token',80)->unique()->nullable()->default(null);
            $table->string('profile_picture')->nullable()->default(null);
            $table->string('profile_picture_thumbnail')->nullable()->default(null);
            $table->string('banner')->nullable()->default(null);
            $table->string('banner_thumbanil')->nullable()->default(null);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
